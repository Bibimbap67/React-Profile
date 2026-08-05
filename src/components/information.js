import React, { useState } from "react";
import { Card, Avatar, Tag, Button } from "antd";
import {
  GithubFilled,
  InstagramOutlined,
  DiscordOutlined,
} from "@ant-design/icons";

function SocialButton({ icon, color, gradient, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
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

function ProfileCard({ name, role, bio, profileImage, hoverImage, skills }) {
  const [isHovered, setIsHovered] = useState(false);
  const avatarSrc = hoverImage && isHovered ? hoverImage : profileImage;

  return (
    <>
      <style>{`
        @media (max-width: 480px) {
          .profile-card-shell {
            padding: 12px !important;
          }

          .profile-card {
            width: 100% !important;
            max-width: 360px !important;
            border-radius: 22px !important;
          }

          .profile-card .ant-card-body {
            padding: 28px 14px 18px !important;
          }

            .profile-status-dot {
            right: 9px !important;
            bottom: 9px !important;
            width: 13px !important;
            height: 13px !important;
          }

          .profile-avatar {
            width: 120px !important;
            height: 120px !important;
          }

          .profile-name {
            font-size: 24px !important;
            margin-top: 10px !important;
          }

          .profile-role {
            font-size: 14px !important;
            margin-bottom: 8px !important;
          }

          .profile-bio {
            font-size: 14px !important;
            max-width: 260px !important;
            line-height: 1.5 !important;
          }

          .profile-skills {
            max-width: 280px !important;
            gap: 8px 6px !important;
            padding: 6px !important;
          }

          .profile-skill {
            font-size: 12px !important;
            padding: 5px 8px !important;
            min-width: 0 !important;
          }

          .profile-skill > span {
            gap: 4px !important;
            justify-content: center !important;
          }

          .profile-socials {
            gap: 12px !important;
            padding: 8px !important;
          }

          .profile-socials a {
            display: inline-flex !important;
          }

          .profile-socials button {
            width: 42px !important;
            height: 42px !important;
            font-size: 20px !important;
          }
        }
      `}</style>
      <div
        className="profile-card-shell"
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
          className="profile-card"
          variant="borderless"
          style={{
            width: 480,
            maxWidth: "100%",
            textAlign: "center",
            borderRadius: 30,
          }}
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
          <div
            className="profile-avatar-wrap"
            style={{
              position: "relative",
              display: "inline-flex",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isHovered ? "scale(1.06)" : "scale(1)",
                boxShadow: isHovered
                  ? "0 12px 20px rgba(98, 40, 215, 0.2)"
                  : "none",
              }}
            >
              <Avatar
                className="profile-avatar"
                size={165}
                src={avatarSrc}
                style={{
                  border: "4px solid white",
                  transition: "all 0.35s ease-in-out",
                  transform: isHovered ? "scale(1.02)" : "scale(1)",
                  objectFit: "cover",
                }}
              />
            </div>
            <span
              className="profile-status-dot"
              style={{
                position: "absolute",
                right: "12px",
                bottom: "12px",
                width: 16,
                height: 16,
                backgroundColor: "#52c41a",
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 0 0 2px rgba(82, 196, 26, 0.18)",
              }}
            />
          </div>

          <h1
            className="profile-name"
            style={{
              margin: "13px 0 -3px 0",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {name}
          </h1>

          <h2
            className="profile-role"
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
            className="profile-bio"
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
            className="profile-skills"
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
                  className="profile-skill"
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
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0,0,0,0.08)";
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
                      justifyContent: "center",
                      gap: "6px",
                      whiteSpace: "nowrap",
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
            className="profile-socials"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              padding: "10px",
            }}
          >
            <SocialButton
              href="https://github.com/Bibimbap67/React-Profile"
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
    </>
  );
}

export default ProfileCard;