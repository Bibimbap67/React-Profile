import React, { useState } from "react";
import { Card, Avatar, Tag, Badge, Button } from "antd";
import {
  GithubFilled,
  InstagramOutlined,
  DiscordOutlined,
} from "@ant-design/icons";

function SocialButton({ icon, color, gradient, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank">
      <Button
        type={hovered ? "primary" : "default"}
        shape="circle"
        icon={icon}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 52,
          height: 52,
          fontSize: 24,
          ...(hovered && {
            background: gradient || color,
            border: "none",
            color: "#fff",
          }),
        }}
      />
    </a>
  );
}

function ProfileCard({ name, role, bio, profileImage, skills }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "24px 16px",
        boxSizing: "border-box",
      }}
    >
      <Card
        variant="borderless"
        style={{ width: 480, textAlign: "center", borderRadius: 30 }}
        styles={{
          body: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 20px",
          },
        }}
      >
        <Badge
          offset={[-30, 150]}
          count={
            <span
              style={{
                width: 18,
                height: 18,
                backgroundColor: "#52c41a",
                borderRadius: "50%",
                display: "inline-block",
                border: "3px solid white",
                boxShadow: "0 0 0 2px rgba(82, 196, 26, 0.18)",
              }}
            />
          }
        >
          <div
            style={{
              padding: "4px",
              background:
                "linear-gradient(90deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)",
              borderRadius: "50%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              size={165}
              src={profileImage}
              style={{ border: "4px solid white" }}
            />
          </div>
        </Badge>

        <h1
          style={{
            margin: "13px 0 -3px 0",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          {name}
        </h1>

        <h2
          style={{
            margin: "0 0 10px 0",
            fontWeight: "bold",
            fontSize: "16px",
            color: "#8c8c8c",
          }}
        >
          {role}
        </h2>

        <p
          style={{
            margin: "0 0 13px 0",
            fontSize: "17px",
            fontWeight: 400,
            color: "#595959",
            maxWidth: "320px",
            lineHeight: "1.6",
            whiteSpace: "pre-line",
          }}
        >
          {bio}
          {/* I love making simple things complex, and make the complex thing
          simple lol. 
          - Bibimbap */}
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            maxWidth: "400px",
            padding: "10px",
          }}
        >
          {skills.map((skill) => {
            const fadedColor = skill.color + "15";
            const fadedColorText = skill.color + "99";


            return (
              <Tag
                key={skill.name}
                variant="filled"
                style={{
                  borderRadius: "999px",
                  padding: "6px 13px",
                  fontWeight: "bold",
                  fontSize: "15px",
                  color: fadedColorText,
                  background: fadedColor,
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.background = skill.color;
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = skill.color;
                  e.currentTarget.style.background = fadedColor;
                  e.currentTarget.style.color = fadedColorText;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              </Tag>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
          }}
        >
          <SocialButton
            href="https://github.com/Bibimbap67"
            icon={<GithubFilled />}
            color="#24292f"
          />
          <SocialButton
            href="https://www.instagram.com/bibimbapkr/"
            icon={<InstagramOutlined />}
            gradient="linear-gradient(90deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)"
          />
          <SocialButton
            href="https://discord.com/users/869640395464781904"
            icon={<DiscordOutlined />}
            color="#5865f2"
          />
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;
