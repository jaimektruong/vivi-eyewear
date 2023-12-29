import { useEffect, useState } from "react";
import "./AdminProductManagementPage.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getBase64 } from "../../utils";
import * as ProductService from "../../services/ProductService";
import { UseMutationHook } from "../../hooks/UseMutationHook";
import { useQuery } from "@tanstack/react-query";
import AdminTable from "../../components/AdminTable/AdminTable";
import DrawerComponent from "../../components/DrawerComponent/DrawerComponent";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
function AdminProductManagementPage() {
  const user = useSelector((state) => state?.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [stateProduct, setStateProduct] = useState({
    name: "",
    image_thumb: "",
    image_detail: "",
    type: "",
    price: "",
    featuredFlag: "",
    countInStock: "",
    discount: "",
    description: "",
  });

  const [stateProductDetail, setStateProductDetail] = useState({
    name: "",
    image_thumb: "",
    image_detail: "",
    type: "",
    price: "",
    featuredFlag: "",
    countInStock: "",
    discount: "",
    description: "",
  });

  const mutation = UseMutationHook((data) => {
    const {
      name,
      image_thumb,
      image_detail,
      type,
      price,
      featuredFlag,
      countInStock: countInStock,
      discount,
      description,
    } = data;
    const res = ProductService.createProduct({
      name,
      image_thumb,
      image_detail,
      type,
      price,
      featuredFlag,
      countInStock,
      discount,
      description,
    });
    return res;
  });

  const mutationUpdate = UseMutationHook((data) => {
    const { id, token, ...rests } = data;
    const res = ProductService.updateProduct(id, token, { ...rests });
    return res;
  });

  const getAllProducts = async () => {
    const res = await ProductService.getAllProduct();
    return res;
  };

  const fetchGetDetailsProduct = async (rowSelected) => {
    const res = await ProductService.getDetailsProduct(rowSelected);
    if (res?.data) {
      setStateProductDetail({
        name: res?.data?.name,
        image_thumb: res?.data?.image_thumb,
        image_detail: res?.data?.image_detail,
        type: res?.data?.type,
        price: res?.data?.price,
        featuredFlag: res?.data?.featuredFlag,
        countInStock: res?.data?.countInStock,
        discount: res?.data?.discount,
        description: res?.data?.description,
      });
    }
    setIsLoadingUpdate(false);
  };

  useEffect(() => {
    if (rowSelected) {
      fetchGetDetailsProduct(rowSelected);
    }
    setIsOpenDrawer(true);
  }, [rowSelected]);

  console.log("StateProduct", stateProductDetail);
  const handleDetailsProduct = () => {
    if (rowSelected) {
      setIsLoadingUpdate(true);
      fetchGetDetailsProduct();
    }
    setIsOpenDrawer(true);
    console.log("rowSelected", rowSelected);
  };

  const { data, isLoading, isSuccess, isError } = mutation;
  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  console.log("dataUpdated", dataUpdated);

  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const { isLoading: isLoadingProducts, data: products } = queryProduct;

  const renderAction = () => {
    return (
      <div>
        <button onClick={handleDetailsProduct}>Chỉnh sửa</button>
        <p>Huỷ kích hoạt</p>
        <p>Xoá</p>
      </div>
    );
  };

  const handleSave = () => {
    mutation.mutate(stateProduct, {
      onSettled: () => {
        queryProduct.refetch();
      },
    });
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      image_thumb: "",
      image_detail: "",
      type: "",
      price: "",
      featuredFlag: "",
      countInStock: "",
      discount: "",
      description: "",
    });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setStateProduct({
      name: "",
      image_thumb: "",
      image_detail: "",
      type: "",
      price: "",
      featuredFlag: "",
      countInStock: "",
      discount: "",
      description: "",
    });
  };

  // Product

  const handleOnChange = (e) => {
    setStateProduct({
      ...stateProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateProductDetail({
      name: "",
      image_thumb: "",
      image_detail: "",
      type: "",
      price: "",
      featuredFlag: "",
      countInStock: "",
      discount: "",
      description: "",
    });
  };

  const handleOnChangeImageThumb = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateProduct({
        ...stateProduct,
        image_thumb: file.preview,
      });
    }
  };
  const handleOnChangeImageDetail = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateProduct({
        ...stateProduct,
        image_detail: file.preview,
      });
    }
  };

  // Product Detail
  const handleOnChangeDetail = (e) => {
    console.log("check", e.target.name, e.target.value);
    setStateProductDetail({
      ...stateProductDetail,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnChangeDetailImageThumb = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateProductDetail({
        ...stateProductDetail,
        image_thumb: file.preview,
      });
    }
  };

  const handleOnChangeDetailImageDetail = async (event) => {
    const file = event.target.files[0];
    if (file) {
      file.preview = await getBase64(file);
      setStateProductDetail({
        ...stateProductDetail,
        image_detail: file.preview,
      });
    }
  };

  const onUpdateProduct = () => {
    mutationUpdate.mutate(
      {
        id: rowSelected,
        token: user?.access_token,
        ...stateProductDetail,
      },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
  };

  const dataTable =
    products?.data?.length &&
    products?.data?.map((product) => {
      return { ...product, key: product._id };
    });
  console.log(dataTable);

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      alert("Sucess");
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      alert("Error");
    }
  }, [isSuccessUpdated]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "FeaturedFlag",
      dataIndex: "featuredFlag",
    },
    {
      title: "ACtion",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column sidebar__container--height">
      <button onClick={() => setIsModalOpen(true)}>Thêm sản phẩm</button>
      <AdminTable
        columns={columns}
        isLoading={isLoadingProducts}
        data={dataTable}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              setRowSelected(record._id);
            },
          };
        }}
      />
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal show={isModalOpen} onHide={handleCancel}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Tên sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Điền tên sản phẩm"
                  name="name"
                  value={stateProduct.name}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Loại sản phẩm</Form.Label>
                <Form.Control
                  type="text"
                  name="type"
                  value={stateProduct.type}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Giá</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={stateProduct.price}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>San pham boi bat</Form.Label>
                <Form.Control
                  type="text"
                  name="featuredFlag"
                  value={stateProduct.featuredFlag}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Tồn kho</Form.Label>
                <Form.Control
                  type="text"
                  name="countInStock"
                  value={stateProduct.countInStock}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Giảm giá</Form.Label>
                <Form.Control
                  type="text"
                  name="discount"
                  value={stateProduct.discount}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mô tả</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={stateProduct.description}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="mb-3"
              >
                <Form.Label>Ảnh thu nhỏ</Form.Label>
                {stateProduct?.image_thumb && (
                  <img
                    src={stateProduct.image_thumb}
                    style={{ width: "64px", height: "64px" }}
                    alt="image_thumb"
                  />
                )}
                <Form.Control
                  type="file"
                  name="image_thumb"
                  onChange={handleOnChangeImageThumb}
                  multiple={false}
                />
              </Form.Group>
              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                className="mb-3"
              >
                <Form.Label>Ảnh chi tiết</Form.Label>
                {stateProduct?.image_detail && (
                  <img
                    src={stateProduct.image_detail}
                    style={{ width: "64px", height: "64px" }}
                    alt="image_detail"
                  />
                )}
                <Form.Control
                  type="file"
                  name="image_detail"
                  onChange={handleOnChangeImageDetail}
                  multiple={false}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* dropdown khoảng giá */}

      <DrawerComponent
        title="Chi tiết sản phẩm"
        isOpen={isOpenDrawer}
        onClose={() => {
          setIsOpenDrawer(false);
        }}
        width="88%"
      >
        {" "}
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Tên sản phẩm</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điền tên sản phẩm"
              name="name"
              value={stateProductDetail.name}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Loại sản phẩm</Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={stateProductDetail.type}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Giá</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={stateProductDetail.price}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>San pham boi bat</Form.Label>
            <Form.Control
              type="text"
              name="featuredFlag"
              value={stateProductDetail.featuredFlag}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tồn kho</Form.Label>
            <Form.Control
              type="text"
              name="countInStock"
              value={stateProductDetail.countInStock}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Giảm giá</Form.Label>
            <Form.Control
              type="text"
              name="discount"
              value={stateProductDetail.discount}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Mô tả</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={stateProductDetail.description}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
            <Form.Label>Ảnh thủ nhỏ</Form.Label>
            {stateProductDetail?.image_thumb && (
              <img
                src={stateProductDetail.image_thumb}
                style={{ width: "64px", height: "64px" }}
                alt="image_thumb"
              />
            )}
            <Form.Control
              type="file"
              name="image_thumb"
              onChange={handleOnChangeDetailImageThumb}
              multiple={false}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-3">
            <Form.Label>Ảnh chi tiết</Form.Label>
            {stateProductDetail?.image_detail && (
              <img
                src={stateProductDetail.image_detail}
                style={{ width: "64px", height: "64px" }}
                alt="image_detail"
              />
            )}
            <Form.Control
              type="file"
              name="image_detail"
              onChange={handleOnChangeDetailImageDetail}
              multiple={false}
            />
          </Form.Group>
        </Form>
        <button onClick={onUpdateProduct}>Apply</button>
      </DrawerComponent>
    </div>
  );
}

export default AdminProductManagementPage;
