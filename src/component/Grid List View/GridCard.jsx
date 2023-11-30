import { Card, Col } from "antd";


const {Meta} = Card;

const GridCard = () => {
    return (
        <div>
            <Col>
            <Card
            hoverable
            style={{ width: 240 }}
                    cover={
                        <img src="https://os.alipayobjects.com/rmsportal/Q8n00oLaAfKPirc.png"
                            alt="exmples"
                        />
                    }
                >
                    <Meta
                        title="Sample Card Grid View"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting,....."
                    />
            </Card>
            </Col>
        </div>
    )
}

export default GridCard;