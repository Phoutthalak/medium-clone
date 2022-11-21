import type { NextPage } from "next";
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";
import { Text, Spacer, User, Button } from '@nextui-org/react'

const Article: NextPage = () => {
    const supabaseClient = useSupabaseClient();
    const user = useUser();
    const router = useRouter();
    const [article, setArticle] = useState<any>({});

    const { id } = router.query;

    useEffect(() => {
        async function getArticle() {
            const { data, error } = await supabaseClient
                .from("articles")
                .select("*")
                .filter("id", "eq", id)
                .single();
                
                console.log(data);

            if (error) {
                console.log(error);
            } else {
                setArticle(data);
            }
        }
        if (typeof id !== "undefined") {
            getArticle();
        }
    }, [id]);


    return (
        <>
            <Text h2>{article.title}</Text>
            <Spacer y={.5} />
            <User
                name={article.user_email?.toLowerCase()}
                size="md"
            />
            <Spacer y={1} />
            <Text size="$lg">
                {article.content}
            </Text>
        </>
    )

}

export default Article;