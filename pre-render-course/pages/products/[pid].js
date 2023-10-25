import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetailPage(props) {
    const { loadedProduct } = props;

    // fallback: true일 때, 렌더링이 완료된 후에 실행됨, notFound: true일 때는도 필요
    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

async function getData() {
    const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filepath);
    const data = JSON.parse(jsonData);

    return data;
}

export async function getStaticProps(context) {
    console.log(context);
    const { params } = context;
    const productId = params.pid;

    const data = await getData();

    const product = data.products.find((product) => product.id === productId);

    // 동적으로 생성된 페이지를 미리 렌더링할 때 사용(fallback: true)
    if (!product) {
        return { notFound: true };
    }

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();
    const ids = data.products.map((product) => product.id);
    const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback: true,
    };
}

export default ProductDetailPage;
