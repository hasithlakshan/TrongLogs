import React, { memo } from "react"
import "./dashboard.stylesheet.scss"
import {
    Table,
    Tabs
} from "antd";

const { TabPane } = Tabs;

const DashboardView = memo(({columns, data}) => (
        <div className="dashboard-wrapper">
            <div className="title" >TrongLogs</div>
            <div className="table">
                <Tabs defaultActiveKey="1">
                    <TabPane tab="NavaTron" key="1">
                        <Table
                            className="data-table"
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                        <div className="box-message">
                            <div className="message">Message</div>
                            <div className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="Krypton" key="2">
                        Content of Tab Pane 2
                    </TabPane>
                </Tabs>
            </div>
            <div className="logout">Log out</div>
        </div>


))

export default DashboardView
