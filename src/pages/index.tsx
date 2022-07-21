// 7. Create the Frontend
import Card from "@/components/Card";
import CardContent from "@/components/CardContent";
import CardForm from "@/components/CardForm";
import CardHeader from "@/components/CardHeader";
import List from "@/components/List";
import ListItem from "@/components/ListItem";

import { trpc } from "@/utils/trpc";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: list, refetch } = trpc.useQuery(["findAll"]);
  useEffect(() => {
    console.log(list, "list, data");
    // [{…}]
    // 0:
    // checked: false
    // id: 7
    // title: "test"
  }, [list]);

  const insertMutation = trpc.useMutation(["insertOne"], {
    onSuccess: () => refetch(),
  });
  const deleteAllMutation = trpc.useMutation(["deleteAll"], {
    onSuccess: () => refetch(),
  });
  const [itemName, setItemName] = useState<string>("");

  // Add item to list
  const insertOne = useCallback(() => {
    if (itemName === "") return;
    insertMutation.mutate({
      title: itemName,
    });
    setItemName("");
  }, [itemName, insertMutation]);

  // Delete all items in list
  const deleteAll = useCallback(() => {
    if (list?.length) {
      deleteAllMutation.mutate({
        ids: list.map((item) => item.id),
      });
    }
  }, [list, deleteAllMutation]);

  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Grocery List - NextJS tRPC App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Card>
          <CardContent>
            <CardHeader title="Grocery List" listLength={list?.length ?? 0} deleteAll={deleteAll} />
            <List>
              {list?.map((item) => (
                <ListItem key={item.id} item={item} />
              ))}
            </List>
          </CardContent>
          <CardForm
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            submit={insertOne}
          />
        </Card>
      </main>
    </>
  );
};

export default Home;
