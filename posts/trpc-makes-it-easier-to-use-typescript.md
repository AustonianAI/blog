---
title: "tRPC Makes It Easier to Use TypeScript"
date: "2022-08-03"
---

I've recently been diving into the "t3 stack" created by popular full stack developer and YouTuber Theo, which gives developers a solid out of the box configuration to satisfy general app needs such as authentication (NextAuth), a database ORM (Prisma), styling (Tailwind), and more.

One of the components of this stack (often referred to as `create-t3-app`, in contrast `create-next-app` or `create-react-app`), is that it emphasizes the use of TypeScript.

For me, TypeScript is one of those languages that I've been using for 1-2 years, but never have felt that I've been using well or correctly. I appreciate it when VSCode's TypeScript engine lets me know I need to think about some edge cases and define my schemas better, but I've never really experienced that easily implemented type safe confidence that is propelling TypeScript to be the de facto standard of JavaScript development.

However, one component of the t3 stack, tRPC, has propelled me to a deeper undestanding of TypeScript in a way that is easy to implmenet and tremendously helpful in application development.

tRPC heralds itself as "end-to-end typsafe APIs made easy". Admittedly, I can't explain what exactly that means, but when I see it in action it makes more sense.

In previous TypeScript projects, I would oftend find myself writing a lot of code to define data schemas to keep TypeScript happy. In addition to the Prisma schema (which I love), I would be basically writing the types of interfaces for all functions which are expecting data as parameters. As the number of these types grew, I would create a `utils/types.ts` where I maintain and export all of these interfaces for use throughout the application.

```
// utils/types.ts
export interface User {
id: string;
username: string;
password: string;
}

export interface Order {
id: string;
userId: string;
total: number;
items: OrderItem[];
}
...
```

While this "master types file" approach is useful, I would then feel like I need to mirror this file when I perform another key application development step - data validation.

My data validation files would essentially be mirror images of my types, but I would use something like `class-validator` to validate data before it passes through various API routes, like this -

```
export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}
```

This made it feel like my code was not very DRY, and I would be maintaing my overall application schema in my TypeScript types, my data validation, and my database ORM.

tRPC offers an alternate solution to this problem as it performs the validation of requests and responses in the API routes, and easily creates our TypeScript types to accompany the data.

By using tRPC alongside Prisma, I am defining the Schema in one place (Prisma), validating the data in one place (tRPC), and I'm then able to use my types throughout the application.

```

```
