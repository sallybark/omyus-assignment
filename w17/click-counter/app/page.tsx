// onClick 이벤트를 사용하기 위해 문서 첫 줄에 use client 작성 필요
"use client";
import useSWR, { useSWRConfig } from "swr";
import styles from "./page.module.css";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  // db에서 클릭된 수를 가져오기 위한 SWR 요청
  const { data, error } = useSWR("/api/counter", fetcher, {
    // 자동 갱신 비활성화 옵션
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const { mutate } = useSWRConfig();

  if (error)
    return (
      <main className={styles.main}>
        <p> failed to load</p>
      </main>
    );
  if (!data)
    return (
      <main className={styles.main}>
        <p> loading... </p>
      </main>
    );

  // data 없이 POST 요청..
  const count = () => {
    fetch("/api/counter", {
      method: "POST",
    }).then((res) => {
      if (res.status == 200) {
        // 서버에 값 업데이트 된 값으로 갱신 할 수 있도록 mutate 사용
        mutate("/api/counter");
      }
    });
  };

  return (
    <main className={styles.main}>
      <p className={styles.title}> Click Counter </p>
      <button onClick={count}>Click Me!</button>
      <p className={styles.des}> 현재 클릭 횟수는 ⬇ </p>
      <div>
        <p className={styles.number}>{data[0].click}</p>
      </div>
    </main>
  );
}
