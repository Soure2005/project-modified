import { Wallet, BadgeDollarSign, ChartNoAxesColumn } from "lucide-react";
export const CardsData = [
  {
    title: "Total Balance",
    value: "$1,452,890.00",
    change: "+4.2%",
    subtitle: "from last week",
    icon: Wallet,
    color: {
      background: "#FFF3F2",
      border: "#F3C9C5",
      iconBg: "#FFE5E2",
      iconColor: "#D32F2F",
    }
  },

  {
    title: "Monthly Revenue",
    value: "$84,200.50",
    change: "+1.8%",
    subtitle: "month over month",
    icon: BadgeDollarSign,
    color: {
      background: "#FFF3F2",
      border: "#F3C9C5",
      iconBg: "#FFE5E2",
      iconColor: "#D32F2F",
    }
  },

  {
    title: "Active Assets",
    value: "24 Assets",
    change: "0",
    subtitle: "Diversified portfolio",
    icon: ChartNoAxesColumn,
    color: {
      background: "#FFF3F2",
      border: "#F3C9C5",
      iconBg: "#FFE5E2",
      iconColor: "#D32F2F",
    }
  },
];