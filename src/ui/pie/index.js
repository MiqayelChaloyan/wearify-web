const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage, fill }) => {
    const r = 50;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill={fill}
            stroke={strokePct !== circ ? colour : ""}
            strokeWidth={"0.5rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : 0}
            strokeLinecap="round"
        ></circle>
    );
};

const Text = ({ percentage, size }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
        >
            {percentage.toFixed(0)}% {size}
        </text>
    );
};

const Pie = ({ percentage, colour, fill, size }) => {
    const pct = cleanPercentage(percentage);
    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                {/* <Circle colour="lightgrey" /> */}
                <Circle colour={colour} percentage={pct} fill={fill} />
            </g>
            <Text percentage={pct} size={size}/>
        </svg>
    );
};

export default Pie;