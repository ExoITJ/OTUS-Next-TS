import Layout from "@/components/layout";
import { useRouter } from "next/router";
import React, { FC } from "react";

const PostPage: FC = () => {
    const { query } = useRouter();

    return (
        <Layout>
            <h1>{query.id}</h1>
        </Layout>
    );
};

export default PostPage;
