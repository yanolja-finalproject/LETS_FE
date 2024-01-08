"use client";

const UserInfo = () => {
  return (
    <article className="flex  flex-col justify-center items-center bg-gray-200 gap-2 p-5">
      <p className="flex items-center gap-3 font-bold text-lg">
        data.nickname
        <span>
          <img src="./icons/editIcon.svg" alt="내 정보 수정" />
        </span>
      </p>
      <p className="text-sm"> email@email.com</p>
    </article>
  );
};

export default UserInfo;
