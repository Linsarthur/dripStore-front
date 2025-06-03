import { ConfigProvider, notification } from "antd";
import { createContext } from "react";

export const AntContext = createContext();

const AntPorvider = ({ children }) => {

    const [api, currentContext] = notification.useNotification({
        placement: "bottomRight"
    })

    return (
        <AntContext.Provider value={{ api }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#C92071"
                    }
                }}
            >
                {currentContext}
                {children}
            </ConfigProvider>
        </AntContext.Provider>
    );
}

export default AntPorvider;