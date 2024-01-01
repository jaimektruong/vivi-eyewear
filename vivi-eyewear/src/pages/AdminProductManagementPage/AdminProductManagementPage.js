import { useEffect, useRef, useState } from "react";
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
  const inittial = () => ({
    name: "",
    color: "",
    material: "",
    shape: "",
    image_thumb: "",
    image_detail: "",
    type: "",
    price: "",
    featuredFlag: "",
    countInStock: "",
    discount: "",
    description: "",
  });
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [stateProduct, setStateProduct] = useState(inittial());
  const [stateProductDetail, setStateProductDetail] = useState(inittial());

  const mutation = UseMutationHook((data) => {
    const {
      name,
      color,
      material,
      shape,
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
      color,
      material,
      shape,
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
  const mutationDelete = UseMutationHook((data) => {
    const { id, token } = data;
    const res = ProductService.deleteProduct(id, token);
    return res;
  });
  const mutationDeleteMany = UseMutationHook((data) => {
    const { token, ...ids } = data;
    const res = ProductService.deleteManyProduct(ids, token);
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
        color: res?.data?.color,
        material: res?.data?.material,
        shape: res?.data?.shape,
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
  }

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true)
      fetchGetDetailsProduct(rowSelected)
    }
  }, [rowSelected, isOpenDrawer])

  console.log("StateProduct", stateProductDetail);
  const handleDetailsProduct = () => {
    setIsOpenDrawer(true)
  }

  const { data, isLoading, isSuccess, isError } = mutation;
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

  const queryProduct = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  const { isLoading: isLoadingProducts, data: products } = queryProduct;

  const renderAction = () => {
    return (
      <div>
        <button
          className="btn btn-outline-warning"
          onClick={handleDetailsProduct}
        >
          Chỉnh sửa
        </button>
        <p>Huỷ kích hoạt</p>
        <button
          className="btn btn-outline-danger"
          onClick={() => setIsModalOpenDelete(true)}
        >
          Xoá
        </button>
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
      color: "",
      material: "",
      shape: "",
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
      color: "",
      material: "",
      shape: "",
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
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
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
      color: "",
      material: "",
      shape: "",
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

  useEffect(() => {
    if (isErrorDeleted && dataDeleted?.status === "OK") {
      alert("Sucess");
      handleCancelDelete();
    } else if (isErrorDeleted) {
      alert("Error");
    }
  }, [isSuccessDeleted]);

  useEffect(() => {
    if (isErrorDeletedMany && dataDeletedMany?.status === "OK") {
      alert("Sucess");
    } else if (isErrorDeletedMany) {
      alert("Error");
    }
  }, [isSuccessDeletedMany]);

  const handleDeleteProduct = () => {
    mutationDelete.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryProduct.refetch();
        },
      }
    );
    setIsModalOpenDelete(false);
  };

  const handleDeleteManyProducts = (ids) => {
    mutationDeleteMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryProduct.refetch();
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
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{
    //         backgroundColor: "#ffc069",
    //         padding: 0,
    //       }}
    //       searchWords={[searchText]}
    //       autoEscape
    //       textToHighlight={text ? text.toString() : ""}
    //     />
    //   ) : (
    //     text
    //   ),
  });

  const columns = [
    {
      title: "Image",
      dataIndex: "image_thumb",
      render: (text, record) => (
        <img
          src={text} // Assuming "image_thumb" contains the URL of the image
          alt="minh hoa"
          style={{ width: "100px", height: "100px" }} // Adjust the size as needed
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Type",
      dataIndex: "type",
      sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a, b) => a.price - b.price,
      filters: [
        {
          text: ">= 50",
          value: ">=",
        },
        {
          text: "<= 50",
          value: "<=",
        },
      ],
      onFilter: (value, record) => {
        if (value === ">=") {
          return record.price >= 50;
        }
        return record.price <= 50;
      },
    },

    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  return (
    <div className="container-fluid d-flex flex-column sidebar__container--height">
      <button
        className="btn btn-outline-success "
        onClick={() => setIsModalOpen(true)}
      >
        Thêm sản phẩm
      </button>
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
        handleDeleteManyProducts={handleDeleteManyProducts}
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
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Màu sắc</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Điền tên sản phẩm"
                  name="color"
                  value={stateProduct.color}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Chất liệu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Điền tên sản phẩm"
                  name="material"
                  value={stateProduct.material}
                  onChange={handleOnChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hình dạng</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Điền tên sản phẩm"
                  name="shape"
                  value={stateProduct.shape}
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
                <Form.Label>Sản phẩm nổi bật</Form.Label>
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
              value={stateProductDetail.name}
              onChange={handleOnChangeDetail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Màu sắc</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điền tên sản phẩm"
              name="color"
              value={stateProduct.color}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Chất liệu</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điền tên sản phẩm"
              name="material"
              value={stateProduct.material}
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Hình dạng</Form.Label>
            <Form.Control
              type="text"
              placeholder="Điền tên sản phẩm"
              name="shape"
              value={stateProduct.shape}
              onChange={handleOnChange}
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
            <Form.Label>Sản phẩm nổi bật</Form.Label>
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
        <button className="btn btn-outline-success" onClick={onUpdateProduct}>
          Apply
        </button>
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
