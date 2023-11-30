import { useState } from "react";
import { Button, Row } from "antd";
import {UnorderedListOutlined,AppstoreOutlined} from '@ant-design/icons'
import GridCard from "./GridCard";

const GridListView = () => {
    const [view,setView]=useState(false)
    return (
        <>
            <div
                style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "2rem"
                }}>
                
                <Button
                    size="large"
                    icon={
                        <UnorderedListOutlined
                            style={{
                                fontSize: "1.5rem"
                            }}
                        />
                    }
                />

                <Button
                    size="large"
                    icon={
                        <AppstoreOutlined
                            style={{ fontSize: "1.5rem" }}
                        />
                    }
                />
            </div>
            <Row gutter={[20, 20]}>
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard/>
            </Row>
        </>
    )
}


export default GridListView;