/* eslint-disable react/prop-types */
import ClearIcon from "@mui/icons-material/Clear";

// css file

const data = [
  {
    Title: "Home",
    Link: "#home",
  },
  {
    Title: "about us",
    Link: "#about",
  },
  {
    Title: "our offering",
    Link: "#offers",
  },
  {
    Title: "contact us",
    Link: "#contact",
  },
];
function SideBarComp({ setState }) {
  return (
    <div className="fixed h-[100vh] w-[100vw] flex justify-center  top-0 bg-black text-white overflow-hidden z-20">
      <div
        className=" absolute right-0 p-2 w-[50px] h-[100px] cursor-pointer"
        onClick={() => {
          setState(false);
        }}
      >
        <ClearIcon />
      </div>
      <ul className="nav-heading-text h-full flex flex-col justify-center gap-3">
        {data.map((item, index) => {
          return (
            <>
              <a href={item.Link}>
                <li
                  key={index}
                  className="cursor-pointer capitalize"
                  onClick={() => {
                    setState(false);
                  }}
                >
                  {item.Title}
                </li>
              </a>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default SideBarComp;
