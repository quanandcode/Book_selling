import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscBook } from "react-icons/vsc";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  let isAdmin = true;
  return (
    <header>
      <div className=" navbar">
        <div className="container">
          <Link to="/" className="d-flex brand">
            <VscBook className="brand-icon" />
            <h2>Epic Read</h2>
          </Link>
          {/* {isAdmin && (
          <Link to="/admin/create/book">
            <h3>Thêm đầu sách</h3>
          </Link>
          )} */}
          <div className="navigation">
            <Link to="/" className="text-active">
              <h2>Home</h2>
            </Link>
            <Link to="/">
              <h2>About</h2>
            </Link>
            <Link to="/">
              <h2>Contact</h2>
            </Link>
          </div>

          <div className="personal">
            <div className="personal-img"></div>

            <div class="personal-dropdown">
              <div className="dropdown-hover">
                <p className="personal-name">Quân Nguyễn</p>
                <div className="drop-icon">
                  <RiArrowDropDownLine></RiArrowDropDownLine>
                </div>
                <div class="dropdown-content">
                  <Link to="/admin/stored/books">Quản lý sách đã đăng</Link>
                  <Link to="#">Thông tin tài khoản</Link>
                  <Link to="#">
                    <BiLogOut className="logout-icon" />
                    Đăng xuất
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
