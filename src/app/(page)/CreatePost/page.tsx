"use client";
import { useEffect, useState } from "react";
import React from "react";
import Header from "@/components/Header";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Axios from "axios";
import { useSession } from "next-auth/react";
import { useRecoilState } from "recoil";

import { userdetail } from "@/store/atom";
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";

const page = () => {
  const session = useSession();
  const [uploaded, setuploaded] = useState(false);
  const [ImageUrl, setImageUrl] = useState<any>();
  const [userDetail, setuserdetail] = useRecoilState<any>(userdetail);
  const [Title, setTitle] = useState("");
  const [Topic, setTopic] = useState("Topic");
  const [Content, setContent] = useState("");
  async function data() {
    const res: any = await Axios.post(`http://localhost:3000/api/users/hasdj`, {
      email: session.data?.user?.email,
      authenticate: session.status == "authenticated" ? true : false,
    });

    
    return Promise.all([res]);
  }
  useEffect(() => {
    data().then((data: any) => {
      try {
        console.log(data[0]);
        setuserdetail(data[0].data.data.userdetail[0]);
      } catch (error) {}
    });
  }, []);
  return (
    <div>
      <Header></Header>
      <div className=" mt-[10vh] mx-10 h-[80vh] rounded-md">
        <div className="mb-2 font-bold ml-2">Title</div>
        <div className="flex justify-between gap-10">
          <Input
            placeholder="Title"
            onChange={(e: any) => {
              setTitle(e.target.value);
            }}
            className=""
            type="text"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="px-10 rounded-md bg-zinc-700 ">
              {Topic}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => {
                  setTopic("Sports");
                }}
              >
                Sports
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTopic("Entertenment");
                }}
              >
                Entertenment
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTopic("Politics");
                }}
              >
                Politics
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTopic("Gaming");
                }}
              >
                Gaming
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTopic("Technology");
                }}
              >
                Technology
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-5 ml-2 font-bold">Content</div>
        <Textarea
          onChange={(e: any) => {
            setContent(e.target.value);
          }}
          className="mt-2 "
          placeholder="Content"
        />

        <div className="flex min-h-[30vh] mt-5 rounded-md bg-zinc-800 flex-col items-center justify-between border p-2">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url);

              setuploaded(true);
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
        
        <Button
          onClick={async () => {
            try {
              if (
                uploaded &&
                Topic != "Topic" &&
                Title != "" &&
                Content != ""
              ) {
                Axios.post("http://localhost:3000/api/blog", {
                  authorId: userDetail.userId,
                  topic: Topic,
                  title: Title,
                  content: Content,
                  thumbnail: ImageUrl,
                }).then((res) => {
                  alert("Post created");
                  setImageUrl("");
                  setTopic("Topic");
                  setTitle("");
                  setContent("");
                  setuploaded(false);
                });
              } else {
                alert("Please file the Enteries");
              }
            } catch (error) {
              alert("error");
            }
          }}
          className="mt-5 font-bold w-full"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default page;
