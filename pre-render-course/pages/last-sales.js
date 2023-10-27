import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
    const [sales, setSales] = useState(props.sales);
    // const [isLoading, setIsLoading] = useState(false);

    // const { data, error, isLoading } = useSWR(
    //     "https://nextjs-course-a001f-default-rtdb.firebaseio.com/sales.json",
    //     (url) => fetch(url).then((response) => response.json())
    // );

    // useEffect(() => {
    //     const transformedSales = [];
    //     for (const key in data) {
    //         transformedSales.push({
    //             id: key,
    //             username: data[key].username,
    //             volume: data[key].volume,
    //         });
    //     }

    //     setSales(transformedSales);
    // }, [data]);

    // useEffect(() => {
    //     fetch(
    //         "https://nextjs-course-a001f-default-rtdb.firebaseio.com/sales.json"
    //     )
    //         .then((response) => response.json())
    //         .then((data) => {
    //             const transformedSales = [];

    //             // console.log(data);

    //             for (const key in data) {
    //                 transformedSales.push({
    //                     id: key,
    //                     username: data[key].username,
    //                     volume: data[key].volume,
    //                 });
    //             }
    //             setSales(transformedSales);
    //             setIsLoading(false);

    //             console.log(sales);
    //         });
    // }, []);

    // if (error) {
    //     return <p>Failed to load.</p>;
    // }

    if (!sales) {
        return <p>Loading...</p>;
    }
    // console.log(sales);
    // console.log(data);
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

export async function getStaticProps() {
    console.log("Generating...");
    const response = await fetch(
        "https://nextjs-course-a001f-default-rtdb.firebaseio.com/sales.json"
    );
    const data = await response.json();

    const transformedSales = [];
    for (const key in data) {
        transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
        });
    }

    return {
        props: {
            sales: transformedSales,
        },
        revalidate: 60,
    };
}
