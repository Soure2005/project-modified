import {
    LayoutDashboard,
    Wallet,
    ArrowLeftRight,
    ChartColumn,
    FileText,
    Settings,
} from "lucide-react";
export const SidebarData = [
    {
        icon: <LayoutDashboard />,
        title: "Dashboard",
        path: "/",
    },
    {
        icon: <Wallet />,
        title: "Profile",
        path: "/profile",
    },
    {
        icon: <ArrowLeftRight />,
        title: "Transactions",
        path: "/transactions",
    },
    {
        icon: <ChartColumn />,
        title: "Market Leads",
        path: "/market-leads",
    },
    {
        icon: <FileText />,
        title: "Performance Report",
        path: "/performance-report",
    },
    {
        icon: <Settings />,
        title: "Settings",
        path: "/settings",
    },
];