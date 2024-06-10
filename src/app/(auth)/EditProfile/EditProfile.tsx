"use client"
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { userdetail,userD } from '@/store/atom';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import { UploadButton, UploadDropzone } from "@/utils/uploadthing";
import { Button } from '@/components/ui/button';
const EditProfile = () => {
    const session = useSession();
  const [CoverImageUrl, setCoverImageUrl] = useState<any>("");
  const [ProImageUrl, setProImageUrl] = useState<any>("");
  const [auth, setAuth]=useState(false)
  const [Name, setName] = useState("");
  const [Bio, setBio] = useState("");
  const [userDe, setuserDe]=useRecoilState<any>(userD)
  const [userDetail, setuserdetail]=useRecoilState<any>(userdetail)
  useEffect(() => {
    
        axios.post(`http://localhost:3000/api/users/hasdj`, {
        email: session.data?.user?.email,
        authenticate: (session.status == "authenticated")?true:false
        }).then(res=>{
            (session.status=="authenticated")?setAuth(true):setAuth(false)
          setuserDe(res.data.data.User)
          setuserdetail(res.data.data.userdetail[0])
        })
    
  }, [])
  return (
    <div className='mt-[12vh] w-full ml-[25vw] mr-[5vw]'>
        
        <div className="flex items-center justify-between gap-10">
        <Image className="p-[1.5px] w-[100px] h-[100px] rounded-full hover:cursor-pointer bg-white " src={userDetail.profilePhoto} width={800} height={800} alt="@shadcn" />
        <div className='w-full'>
        <div className="mb-2 font-bold ml-2">Name</div>
          <Input
            placeholder="Name"
            onChange={(e: any) => {
              setName(e.target.value);
            }}
            className=""
            type="text"
          />
        </div>
          
        </div>

        <div className="mt-5 ml-2 font-bold">Bio</div>
        <Textarea
          onChange={(e: any) => {
            setBio(e.target.value);
          }}
          className="mt-2 "
          placeholder="Bio"
        />
        <div className="mt-5 ml-2 font-bold">Cover Photo</div>
        <div className="flex min-h-[30vh] mt-5 rounded-md bg-zinc-800 flex-col items-center justify-between border p-2">
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setCoverImageUrl(res[0].url);

              
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
                CoverImageUrl != "" ||
                Name != "Topic" ||
                Bio != "" ||
                ProImageUrl != ""
              ) {
                axios.put("http://localhost:3000/api/users/1", {
                    email: session.data?.user?.email,
                    authenticate: auth,
                    name: Name,
                    bio: Bio,
                    profilePhoto: ProImageUrl,
                    coverPhoto: CoverImageUrl
                }).then((res) => {
                  alert("Post created");
                  setCoverImageUrl("");
                  setProImageUrl("");
                  setBio("");
                  setName("");
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
  )
}

export default EditProfile