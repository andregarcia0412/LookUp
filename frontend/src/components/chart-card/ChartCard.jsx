import "./style.chart-card.css"

const ChartCard = ({chart, title}) => {

    return(
        <div className="chart-card">
            <h1>{title}</h1>
            {chart}
        </div>
    )
}

export default ChartCard