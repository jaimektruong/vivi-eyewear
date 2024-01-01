import { useEffect, useRef, useState } from "react";
import "./AdminCustomerManagementPage.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getBase64 } from "../../utils";
import * as UserService from "../../services/UserService";
import { UseMutationHook } from "../../hooks/UseMutationHook";
import { useQuery } from "@tanstack/react-query";
import AdminTable from "../../components/AdminTable/AdminTable";
import DrawerComponent from "../../components/DrawerComponent/DrawerComponent";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

function AdminProductManagementPage() {
  const user = useSelector((state) => state?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [stateUser, setStateUser] = useState({
    name: "",
    email: "",
    isAdmin: false,
    phone: "",
    address: "",
    avatar: "",
    city: "",
  });

  const [stateUserDetail, setStateUserDetail] = useState({
    name: "",
    email: "",
    isAdmin: false,
    phone: "",
    address: "",
    avatar: "",
    city: "",
  });

  const mutationUpdate = UseMutationHook((data) => {
    const { id, token, ...rests } = data;
    const res = UserService.updateUser(id, token, { ...rests });
    return res;
  });

  const mutationDelete = UseMutationHook((data) => {
    const { token, id } = data;
    const res = UserService.deleteUser(id, token);
    return res;
  });

  const mutationDeleteMany = UseMutationHook((data) => {
    const { token, ...ids } = data;
    const res = UserService.deleteManyUser(ids, token);
    return res;
  });

  const getAllUser = async () => {
    const res = await UserService.getAllUser(user?.access_token);
    console.log("res", res);
    return res;
  };

  const fetchGetDetailsUser = async (rowSelected) => {
    const res = await UserService.getDetailsUser(rowSelected);
    if (res?.data) {
      setStateUserDetail({
        name: res?.data?.name,
        email: res?.data?.email,
        isAdmin: res?.data?.isAdmin,
        phone: res?.data?.phone,
        address: res?.data?.address,
        avatar: res?.data?.avatar,
        city: res?.data?.city,
      });
    }
    setIsLoadingUpdate(false);
  };

  const handleDeleteManyUsers = (ids) => {
    mutationDeleteMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };

  // useEffect(() => {
  //   if (rowSelected && isOpenDrawer) {
  //     setIsLoadingUpdate(true)
  //     fetchGetDetailsUser(rowSelected)
  //   }
  // }, [rowSelected, isOpenDrawer])

  console.log("StateProduct", stateUserDetail);
  const handleDetailsUser = () => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true)
      fetchGetDetailsUser(rowSelected)
    }
    setIsOpenDrawer(true);
  };

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  const {
    data: dataDeleted,
    isLoading: isLoadingDeleted,
    isSuccess: isSuccessDeleted,
    isError: isErrorDeleted,
  } = mutationDelete;

  const {
    data: dataDeletedMany,
    isLoading: isLoadingDeletedMany,
    isSuccess: isSuccessDeletedMany,
    isError: isErrorDeletedMany,
  } = mutationDeleteMany;
  console.log("dataDeleted", dataDeleted);

  const queryUser = useQuery({
    queryKey: ["users"],
    queryFn: getAllUser,
  });
  const { isLoading: isLoadingUsers, data: users } = queryUser;

  const renderAction = () => {
    return (
      <div>
        <button className= "btn btn-outline-warning" onClick={handleDetailsUser}>Chỉnh sửa</button>
        <p>Huỷ kích hoạt</p>
        <button className= "btn btn-outline-danger" onClick={() => setIsModalOpenDelete(true)}>Xoá</button>
      </div>
    );
  };

  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  // Product

  const handleOnChange = (e) => {
    setStateUser({
      ...stateUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateUserDetail({
      name: "",
      email: "",
      isAdmin: "",
      phone: "",
      address: "",
      avatar: "",
      city: "",
    });
  };

  const handleOnChangeAvatar = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateUser({
        ...stateUser,
        avatar: file.preview,
      });
    }
  };

  // Product Detail
  const handleOnChangeDetail = (e) => {
    console.log("check", e.target.name, e.target.value);
    setStateUserDetail({
      ...stateUserDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeDetailAvatar = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateUserDetail({
        ...stateUserDetail,
        avatar: file.preview,
      });
    }
  };

  const onUpdateUser = () => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...stateUserDetail,
      },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
  };

  const dataTable =
    users?.data?.length &&
    users?.data?.map((product) => {
      return { ...product, key: product._id };
    });
  console.log(dataTable);

  useEffect(() => {
    if (!isLoadingUpdated && isSuccessUpdated && dataUpdated?.status === "OK") {
      alert("Success");
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      alert("Error");
    }
  }, [isLoadingUpdated, isSuccessUpdated]);

  useEffect(() => {
    if (isErrorDeleted && dataDeleted?.status === "OK") {
      alert("Success");
      handleCancelDelete();
    } else if (isErrorDeleted) {
      alert("Error");
    }
  }, [isSuccessDeleted]);
  useEffect(() => {
    if (isErrorDeletedMany && dataDeletedMany?.status === "OK") {
      alert("Success");
    } else if (isErrorDeletedMany) {
      alert("Error");
    }
  }, [isSuccessDeletedMany]);

  const handleDeleteProduct = () => {
    mutationDelete.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryUser.refetch();
        },
      }
    );
    setIsModalOpenDelete(false);
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const columns = [
    {
      title: "Họ và tên",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Số điện thoại",
      dataIndex: "phone",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Tỉnh/Thành",
      dataIndex: "city",
      sorter: (a, b) => a.city - b.city,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column sidebar__container--height">
      <button className= "btn btn-outline-success"  onClick={() => setIsModalOpen(true)}>Thêm người dùng</button>
      <AdminTable
        columns={columns}
        isLoading={isLoadingUsers}
        data={dataTable}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setRowSelected(record._id);
            },
          };
        }}
        handleDeleteManyProducts={handleDeleteManyUsers}
      />
      {/* dropdown khoảng giá */}

      <DrawerComponent
        title="Chi tiết sản phẩm"
        isOpen={isOpenDrawer}
        onClose={() => {
          setIsOpenDrawer(false);
        }}
        width="50%"
      >
        {" "}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điền tên sản phẩm"
              name="name"
              value={stateUserDetail.name}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Loại sản phẩm</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={stateUserDetail.email}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>San pham boi bat</Form.Label>
            <Form.Control
              type="text"
              name="isAdmin"
              value={stateUserDetail.isAdmin}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tồn kho</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={stateUserDetail.phone}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="text"
              name="address"
              value={stateUserDetail.address}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={stateUserDetail.city}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
            <Form.Label>Ảnh thủ nhỏ</Form.Label>
            {stateUserDetail?.avatar && (
              <img
                src={stateUserDetail.avatar}
                style={{ width: "64px", height: "64px" }}
                alt="image_thumb"
              />
            )}
            <Form.Control
              type="file"
              name="avatar"
              onChange={handleOnChangeDetailAvatar}
              multiple={false}
            />
          </Form.Group>
        </Form>
        <button className= "btn btn-outline-success"  onClick={onUpdateUser}>Apply</button>
      </DrawerComponent>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={isModalOpenDelete} onHide={handleCancelDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Xoá sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>Bạn có muốn xoá sản phẩm không?</div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleDeleteProduct}>
              Có
            </Button>
            <Button variant="secondary" onClick={handleCancelDelete}>
              Không
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default AdminProductManagementPage;
