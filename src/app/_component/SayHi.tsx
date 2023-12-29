"use client";

import { useQuery } from "@tanstack/react-query";
import getHi from "@/api/home/getHi";

const SayHi = () => {
  const { data } = useQuery({
    queryKey: ["hi"],
    queryFn: getHi,
  });

  return <p>{data}</p>;
};

export default SayHi;
