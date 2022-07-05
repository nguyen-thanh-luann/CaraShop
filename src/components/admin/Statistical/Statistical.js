import { useState, useEffect } from "react";
import AdminSidebar from "../SideBar/AdminSidebar";
import AdminInfo from "./../adminInfo/AdminInfo";
import productService from "../../../service/productService";

function Statistical() {
  const [products, setProducts] = useState([]);

  const loadProducts = () => {
    productService
      .getAllProducts()
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <>
      <div className="adminForm">
        <AdminSidebar />
        <div className="adminContainer">
          <div className="adminContent">
            {/* nav */}
            <nav className="d-flex justify-content-between align-items-center">
              <h4>
                <i className="fa-solid fa-shirt"></i> Sản Phẩm / Thống Kê
              </h4>
              <AdminInfo />
            </nav>
            {/*search  */}

            <div className="search-time-group mt-4">
              <div className="searchGroup me-3">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="ms-2 w-75 p-0"
                  placeholder="Tìm Kiếm..."
                />
              </div>
              <input type="date" defaultValue="dd/mm/yyyy" />
              <i
                className="fa-solid fa-arrow-right"
                style={{ margin: "0 1rem" }}
              ></i>
              <input type="date" defaultValue="dd/mm/yyyy" />
            </div>

            {/* table */}
            <table className="table table-bordered mt-4 text-center align-middle table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên sản phẩm</th>
                  <th scope="col">DVT</th>
                  <th scope="col">Tồn Đầu</th>
                  <th scope="col">Nhập</th>
                  <th scope="col">Xuất</th>
                  <th scope="col">Tồn cuối</th>
                </tr>
              </thead>
              <tbody>
                {products &&
                  products.map((pro) => (
                    <tr>
                      <td>{pro.id}</td>
                      <th>{pro.productName}</th>
                      <td>cái</td>
                      <td>7</td>
                      <td>10</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {/* pagination */}
            {/* <div className='d-flex justify-content-end'>
              <nav aria-label='Page navigation example'>
                <ul className='pagination'>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Previous'>
                      <span aria-hidden='true'>&laquo;</span>
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      1
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      2
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#'>
                      3
                    </a>
                  </li>
                  <li className='page-item'>
                    <a className='page-link' href='#' aria-label='Next'>
                      <span aria-hidden='true'>&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistical;
