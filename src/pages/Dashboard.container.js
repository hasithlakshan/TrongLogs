import  React, { PureComponent } from "react"
import DashboardView from "./Dashboard.view";

class Dashboard extends  PureComponent{
    constructor() {
        super()
    }

    componentDidMount() {
    }

    columns = () => {
        return [
            {
                title: "Time",
                dataIndex: "time",
                showSorterTooltip: false,
                width: "20%",
                align: "center"
            },
            {
                title: "File",
                dataIndex: "file",
                showSorterTooltip: false,
                width: "20%",
                align: "center"
            },
            {
                title: "Level Name",
                dataIndex: "levelName",
                showSorterTooltip: false,
                width: "20%",
                align: "center"
            },
            {
                title: "Name",
                dataIndex: "name",
                showSorterTooltip: false,
                width: "20%",
                align: "center"
            }
        ]
    }

    get generateProps (){
        return {
            columns: this.columns(),
            data: [{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            },{
                time:"2020/02/11",
                file: "x.js",
                levelName: "hasith",
                name: "lakshan"

            }]
        }
    }


    render() {
        return (
            <DashboardView {...this.generateProps} />
        )
    }
}

export default Dashboard
