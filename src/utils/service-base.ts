import { z } from "zod";
import { FetchClient } from "./fetch-client";
import { API_URL, PHOTO_API } from "./config";

const USER_MDOEL = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string().optional(),
  age: z.number(),
  gender: z.string(),
  email: z.string().email(),
  phone: z.string(),
  birthDate: z.string(),
  height: z.number(),
  weight: z.number(),
  eyeColor: z.string(),
});

const QUOTE_MODEL = z.object({
  id: z.number(),
  quote: z.string(),
  author: z.string(),
});

const PHOTO_MODEL = z.object({
  id: z.string(),
  author: z.string(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  download_url: z.string(),
});

export type UserType = z.infer<typeof USER_MDOEL>;

export async function fetchBase<T>(
  path: string,
  apiBase = API_URL
): Promise<T> {
  const client = new FetchClient();
  const url = `${apiBase}${path}`;

  return client.get<T>(url);
}

// fetch user
type usersResponseType = {
  users: UserType[];
};
export async function fetchUsers(): Promise<UserType[]> {
  const result = await fetchBase<usersResponseType>("users");
  return result?.users || [];
}

export type quoteType = z.infer<typeof QUOTE_MODEL>;
type quoteResponseType = {
  quotes: quoteType[];
};
export async function getRandomQuote(): Promise<quoteType[]> {
  const result = await fetchBase<quoteResponseType>("quotes");
  return result?.quotes || [];
}

// fetch photos
export type PhotoType = z.infer<typeof PHOTO_MODEL>;
export async function fetchPhotos(): Promise<PhotoType[]> {
  const result = await fetchBase<PhotoType[]>("list", PHOTO_API);
  return result;
}
