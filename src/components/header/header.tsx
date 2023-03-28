import { Routes } from "@/utils/routes";
import React, { FC } from "react";
import Link from "next/link";
import s from "./header.module.scss";

const Header: FC = () => {
    return (
        <div className={s.header}>
            <Link href={Routes.Home} className={s.headerLink}>
                Домой
            </Link>
            <Link href={Routes.Posts} className={s.headerLink}>
                Посты
            </Link>
        </div>
    );
};

export default Header;
