import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary: "#00c899",
    colorBgContainer: "#f9fafb",
    colorBorder: "#e5e7eb",
    borderRadius: 12,
    borderRadiusLG: 16,
    controlHeight: 44,
    fontSize: 15,
  },
  components: {
    Form: {
      labelColor: "#374151",
      labelFontSize: 14,
    },
    Input: {
      activeShadow: "0 0 0 2px rgba(0, 200, 153, 0.1)",
    },
    Select: {
      optionActiveBg: "#f0fdf9",
      optionSelectedBg: "#ecfdf5",
    },
    Button: {
      primaryShadow: "0 2px 4px rgba(0, 200, 153, 0.2)",
      fontWeight: 500,
    },
    Layout: {
      headerBg: "#ffffff",
      bodyBg: "#ffffff",
      footerBg: "#ffffff",
    },
  },
};
