import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Compass,
  Edit,
  HomeIcon,
  PenTool,
  Settings,
  UserPenIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ProfilePage() {
  return (
    <>
      <div className=" bg-accent flex p-2 max-h-screen">
        <div className="flex flex-col gap-3 p-4 w-xs">
          <div className="text-center">Tranquill Logo</div>
          <div className="flex flex-col items-center">
            <Avatar className="size-30">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-lg">Name of user</div>
            <div className="text-sm">@username</div>
          </div>
          <hr class="border-1 border-black" />
          <div className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer">
            <PenTool />
            My Blogs
          </div>
          <div className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer">
            <UserPenIcon />
            Edit Profile
          </div>
          <div className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer">
            <Settings />
            Settings
          </div>
          <div className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer">
            <HomeIcon />
            Go To Home Page
          </div>
          <div className="flex gap-1 hover:bg-secondary p-2 rounded-xl cursor-pointer">
            <Compass />
            Go To Explore Page
          </div>
          <div className="flex gap-1 p-2 rounded-xl cursor-pointer">
            <Button className="w-full">Log Out</Button>
          </div>
        </div>

        <div className=" rounded-2xl p-8 w-fit overflow-scroll bg-background text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa itaque
          beatae quas rem aut quibusdam repudiandae placeat, voluptatibus sed
          odit ducimus laborum omnis facilis sint cupiditate ipsum culpa,
          obcaecati aliquam? Cupiditate quibusdam provident dolorum, blanditiis
          delectus ea. Iusto ea reprehenderit nemo quam quibusdam esse, ut
          explicabo ex id veritatis, distinctio optio tempora nulla, dolore
          ipsum fuga minus mollitia excepturi? Beatae. Facilis reprehenderit
          dicta porro, consequatur cumque ex temporibus nisi minus dolore
          maiores, esse error exercitationem natus suscipit, fuga dolorum quo
          quaerat obcaecati recusandae quidem praesentium. Vitae assumenda
          voluptates error cum. Molestiae nisi tempore cupiditate, enim, nam
          consectetur asperiores, unde fugit doloribus blanditiis voluptate
          excepturi! Sint necessitatibus omnis cum ipsum eaque, aperiam
          eligendi, impedit maxime quidem optio accusamus doloribus mollitia
          corporis. Doloremque sapiente magnam, nulla quisquam hic officia.
          Possimus cum ratione qui adipisci tempora quo laborum laboriosam quis
          corporis, velit maiores! Similique at aliquam eveniet vitae ab enim
          tenetur dicta. Itaque! Eos harum eligendi dolor temporibus? Quia esse
          asperiores ut suscipit quibusdam eaque assumenda eligendi nihil
          eveniet. Eum ipsa incidunt quibusdam recusandae excepturi similique
          voluptatibus ratione tempora quas aliquid. Adipisci, laudantium. Error
          nostrum cumque dolor eos sequi nihil architecto autem ab praesentium
          voluptatum esse repellendus optio consequuntur iusto veniam officia,
          nemo, ducimus sint quos impedit atque suscipit. Et saepe recusandae
          veniam. Fuga quod libero dicta facere porro! Consequatur dolorem
          veritatis in eveniet perferendis temporibus! Rerum ipsum neque veniam
          atque molestiae et totam sit id, quisquam nihil aperiam dignissimos
          cum reprehenderit soluta. Dolor consequuntur nihil saepe eos non
          incidunt autem hic inventore. Deleniti modi animi maxime doloremque
          perspiciatis earum sapiente nisi doloribus illum laudantium,
          repellendus corporis. Saepe eligendi earum qui hic cumque! Laborum
          dolor consectetur possimus quisquam! Quas nemo iusto iste inventore
          quod distinctio alias molestiae hic, pariatur dolore. Ea ipsa
          temporibus, impedit quos modi neque fugit, facere ullam quibusdam
          deleniti nobis! Esse dignissimos debitis vero. Recusandae reiciendis
          quas dolores sapiente nesciunt. Rem facilis asperiores consequuntur
          inventore at voluptate, deserunt blanditiis quisquam nobis harum!
          Natus odio eum ipsa eaque asperiores necessitatibus vel. Corrupti
          excepturi animi vero quisquam magni. Ullam sit quos aspernatur
          repellendus ab vero sapiente magnam. Voluptate quae, dolores quam
          omnis perferendis dolorum eaque vel eligendi consequuntur, soluta quas
          maxime ad. Repudiandae ipsam nulla quidem temporibus, distinctio ipsum
          earum omnis velit dolorem, nostrum iusto similique repellat facilis
          magnam voluptatibus hic optio culpa eum quam nobis porro at voluptatem
          voluptatum repellendus! Dignissimos. Fugiat laudantium libero quo
          optio ullam aliquid et ad porro consectetur nihil, debitis ipsam
          ratione officia voluptatibus. Vel possimus repudiandae, labore atque,
          eaque odit dolorum temporibus non expedita corrupti quia. Accusantium
          esse dolorum, cum explicabo perferendis saepe natus totam earum autem
          ducimus tempora cupiditate quas reprehenderit harum nemo distinctio
          blanditiis. Harum quidem reprehenderit ab saepe et architecto?
          necessitatibus eveniet, commodi ipsa deserunt voluptatem eum corporis
          quas quam ex sunt. Odit. Alias unde dolorum nemo ducimus enim delectus
          eveniet eos voluptatibus aliquid natus. Placeat, ab porro ut id
          aspernatur sint. Perferendis voluptates doloremque minima placeat
          nemo, dolore temporibus sed obcaecati. Cupiditate? Facilis rerum
          cumque corporis reiciendis accusamus, recusandae repellendus fugiat
          quos nam consectetur repellat qui quasi aut autem tenetur, alias
          explicabo optio deleniti pariatur sunt doloribus consequatur a. Porro,
          magnam aspernatur. Voluptate eos inventore aperiam obcaecati
          laboriosam velit atque architecto non amet ab mollitia, deleniti
          aspernatur numquam error ipsum ullam ut odit beatae facere minus
          quibusdam? Iusto voluptatum ut veritatis repellat! Dignissimos
          assumenda provident adipisci qui maxime! Ad nihil libero eveniet quasi
          possimus molestias autem dolore mollitia quos modi rerum nobis dolorum
          asperiores
        </div>
      </div>
    </>
  );
}
