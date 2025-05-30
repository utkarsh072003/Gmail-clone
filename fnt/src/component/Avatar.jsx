import React from "react";

const Avatar = ({ name, src, size = 48 }) => {
  const getInitials = (name) => {
    if (!name) return "";
    const words = name.trim().split(" ");
    return words.map((w) => w[0]).join("").toUpperCase();
  };

  return (
    <div
      className={`rounded-full flex items-center justify-center bg-gray-300 text-white font-bold`}
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full rounded-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = ""; // fallback to initials
          }}
        />
      ) : (
        getInitials(name)
      )}
    </div>
  );
};

export default Avatar;
