import { useEffect, useState } from "react";

function LastSalesPage(props) {
    const [sales, setSales] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch(
            "https://nextjs-course-a001f-default-rtdb.firebaseio.com/sales.json"
        )
            .then((response) => response.json())
            .then((data) => {
                const transformedSales = [];

                // console.log(data);

                for (const key in data) {
                    transformedSales.push({
                        id: key,
                        username: data[key].username,
                        volume: data[key].volume,
                    });
                }
                setSales(transformedSales);
                setIsLoading(false);

                console.log(sales);
            });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (!sales) {
        return <p>No data yet</p>;
    }
    console.log(sales);
    return (
        <ul>
            {sales.map((sale) => (
                <li key={sale.id}>
                    {sale.username} - ${sale.volume}
                </li>
            ))}
        </ul>
    );
}

export default LastSalesPage;
