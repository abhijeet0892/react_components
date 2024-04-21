import { useRef, useState } from "react";
import "./styles.css";

const menuItems = [
  {
    id: 1,
    name: "Home",
    icon: "home",
  },
  {
    id: 2,
    name: "Account",
    icon: "account_circle",
    items: ["Dashboard", "Logout"],
  },
  {
    id: 3,
    name: "Create",
    icon: "edit_document",
    items: ["Article", "Document", "Report"],
  },
  {
    id: 4,
    name: "Settings",
    icon: "settings",
    items: ["Display", "Editor", "Theme", "Interface"],
  },
  {
    id: 5,
    name: "Product",
    icon: "inventory_2",
  },
  {
    id: 6,
    name: "Favorites",
    icon: "favorite",
  },
];

const Icon = ({ icon }) => (
  <span className="material-symbols-outlined">{icon}</span>
);

const NavHeader = () => (
  <header className="sidebar-header">
    <button type="button">
      <Icon icon="menu" />
    </button>
    <span>Admin</span>
  </header>
);

const NavButton = ({ onClick, name, icon, isActive, hasSubNav }) => (
  <button
    type="button"
    onClick={() => onClick(name)}
    className={isActive ? "active" : ""}
  >
    {icon && <Icon icon={icon} />}
    <span>{name}</span>
    {hasSubNav && <Icon icon="expand_more" />}
  </button>
);

const SubMenu = ({ item, activeItem, handleClick }) => {
  const navRef = useRef(null);

  const isSubNavOpen = (item, items) =>
    items.some((i) => i === activeItem) || item === activeItem;

  return (
    <div
      className={`sub-nav ${isSubNavOpen(item.name, item.items) ? "open" : ""}`}
      style={{
        height: !isSubNavOpen(item.name, item.items)
          ? 0
          : navRef.current?.clientHeight,
      }}
    >
      <div ref={navRef} className="sub-nav-inner">
        {item?.items.map((subItem) => (
          <NavButton
            key={subItem}
            onClick={handleClick}
            name={subItem}
            isActive={activeItem === subItem}
          />
        ))}
      </div>
    </div>
  );
};

export const Sidebar1 = () => {
  const [activeItem, setActiveItem] = useState("");

  const handleClick = (item) => {
    console.log("activeItem", activeItem);
    setActiveItem(item !== activeItem ? item : "");
  };

  return (
    <aside className="sidebar">
      <NavHeader />
      {menuItems.map((item) => (
        <div key={item.id}>
          {!item.items && (
            <NavButton
              key={item.id}
              onClick={handleClick}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
              hasSubNav={!!item.items}
            />
          )}
          {item.items && (
            <>
              <NavButton
                key={item.id}
                onClick={handleClick}
                name={item.name}
                icon={item.icon}
                isActive={activeItem === item.name}
                hasSubNav={!!item.items}
              />
              <SubMenu
                key={`${item.id}-submenu`}
                activeItem={activeItem}
                handleClick={handleClick}
                item={item}
              />
            </>
          )}
        </div>
      ))}
    </aside>
  );
};
