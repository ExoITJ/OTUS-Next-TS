import Layout from "@/components/layout";
import { POSTS_DATA } from "@/utils/posts";
import Link from "next/link";
import React, { FC } from "react";

const PostsPage: FC = () => {
    const renderPosts = () =>
        POSTS_DATA.map(({ id, title, body }) => (
            <div key={id}>
                <h2>{title}</h2>
                <span>{body}</span>
                <button>
                    <Link href={`/posts/${id}`}>Подробнее</Link>
                </button>
            </div>
        ));

    return <Layout>{renderPosts()}</Layout>;
};

export default PostsPage;
