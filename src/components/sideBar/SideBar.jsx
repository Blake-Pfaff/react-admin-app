import "./sideBar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutline,
  ShoppingCart,
  AttachMoney,
  BarChart,
  Email,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <LineStyle className="sideBarIcon" />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className="sideBarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <PersonOutline className="sideBarIcon" />
              Users
            </li>
            <li className="sideBarListItem">
              <ShoppingCart className="sideBarIcon" />
              Products
            </li>
            <li className="sideBarListItem">
              <AttachMoney className="sideBarIcon" />
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChart className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <Email className="sideBarIcon" />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className="sideBarIcon" />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className="sideBarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline className="sideBarIcon" />
              Manager
            </li>
            <li className="sideBarListItem">
              <Timeline className="sideBarIcon" />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className="sideBarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
