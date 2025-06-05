import { ConfigProvider, notification } from "antd";
import { createContext, useState } from "react";

export const AntContext = createContext();

const AntPorvider = ({ children }) => {


    const [collapsed, setCollapsed] = useState(false);

    const [api, contextHolder] = notification.useNotification({
        placement: "bottomRight"
    })

    return (
        <AntContext.Provider value={{ api, collapsed, setCollapsed }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#C92071"
                    }
                }}
            >
                {contextHolder}
                {children}
            </ConfigProvider>
        </AntContext.Provider>
    );
}

export default AntPorvider;