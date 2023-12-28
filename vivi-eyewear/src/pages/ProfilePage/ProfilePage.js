import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { UseMutationHook } from "../../hooks/UseMutationHook";
import { updateUser } from "../../redux/slices/userSlice";
import { Form } from "react-bootstrap";
import { getBase64 } from "../../utils";
function ProfilePage() {
  const mutation = UseMutationHook((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, rests, access_token);
  });

  const dispatch = useDispatch();

  const { data, isLoading, isSuccess, isError } = mutation;
  const user = useSelector((state) => state.user);

  const [name, setName] = useState(user?.name || "");
  const handleOnChangeName = (value) => {
    setName(value.target.value);
  };

  const [email, setEmail] = useState(user?.email || "");
  const handleOnChangeEmail = (value) => {
    setEmail(value.target.value);
  };

  const [phone, setPhone] = useState(user?.phone || "");
  const handleOnChangePhone = (value) => {
    setPhone(value.target.value);
  };

  const [address, setAddress] = useState(user?.address || "");
  const handleOnChangeAddress = (value) => {
    setAddress(value.target.value);
  };

  const [avatar, setAvatar] = useState(user?.avatar || "");
  const handleOnChangeAvatar = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const base64Image = await getBase64(file);
      setAvatar(base64Image);
    }
  };

  useEffect(() => {
    setName(user?.name || "");
    setEmail(user?.email || "");
    setPhone(user?.phone || "");
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      alert("Sucess");
      handleGetDetailUser(user?.id, user?.access_token);
    } else if (isError) {
      alert("Failed");
    }
  });

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const handleUpdate = () => {
    mutation.mutate({
      id: user?.id,
      email,
      name,
      phone,
      address,
      avatar,
      access_token: user?.access_token,
    });
  };

  return (
    <div className="inner">
      <div className="profile__sidebar"></div>
      <div className="profile__content">
        <h2>Thông tin người dùng</h2>
        <div>
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleOnChangeName}
          />
          <button onClick={handleUpdate}>Cập nhật</button>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleOnChangeEmail}
          />
          <button onClick={handleUpdate}>Cập nhật</button>
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={handleOnChangePhone}
          />
          <button onClick={handleUpdate}>Cập nhật</button>
        </div>
        <div>
          <label htmlFor="address">Địa chỉ</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={handleOnChangeAddress}
          />
          <button onClick={handleUpdate}>Cập nhật</button>
        </div>
        <div>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Chọn hình ảnh (Chỉ chấp nhận 1 tệp)</Form.Label>
            <Form.Control
              type="file"
              onChange={handleOnChangeAvatar}
              multiple={false}
            />
          </Form.Group>

          <label htmlFor="avatar">Avatar</label>
          <input
            type="text"
            id="avatar"
            style={{ display: "none" }}
            value={avatar}
            onChange={handleOnChangeAvatar}
          />
          {avatar && (
            <img
              src={avatar}
              style={{ height: "64px", width: "64px" }}
              alt="avatar"
            />
          )}
          <button onClick={handleUpdate}>Cập nhật</button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
