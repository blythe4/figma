"use client";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { suit } from "@/utils/fonts/fonts";
import Button from "./components/button";

export default function Home() {
  return (
    <main
      className={`${suit.variable} font-suit flex min-h-screen flex-col items-center justify-between`}
    >
      <Header />
      <div className="Container flex flex-col gap-10">
        <span className="text-3xl font-bold">content</span>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col gap-3">
            <Button
              label="Style 1"
              size="xs"
              onClick={() => console.log("button")}
            />
            <Button label="Style 1" onClick={() => console.log("button")} />
            <Button
              label="Style 1"
              size="md"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 1"
              size="lg"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 1"
              size="xl"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 1"
              disabled
              onClick={() => console.log("button")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label="Style 2"
              type="medium"
              size="xs"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 2"
              type="medium"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 2"
              type="medium"
              size="md"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 2"
              type="medium"
              size="lg"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 2"
              type="medium"
              size="xl"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 2"
              type="medium"
              disabled
              onClick={() => console.log("button")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label="Style 3"
              type="low"
              size="xs"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 3"
              type="low"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 3"
              type="low"
              size="md"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 3"
              type="low"
              size="lg"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 3"
              type="low"
              size="xl"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 3"
              type="low"
              disabled
              onClick={() => console.log("button")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label="Style 4"
              type="disable"
              size="xs"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 4"
              type="disable"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 4"
              type="disable"
              size="md"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 4"
              type="disable"
              size="lg"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 4"
              type="disable"
              size="xl"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 4"
              type="disable"
              disabled
              onClick={() => console.log("button")}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Button
              label="Style 5"
              type="text"
              fontSize="xs"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 5"
              type="text"
              fontSize="sm"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 5"
              type="text"
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 5"
              type="text"
              fontSize="xs"
              line
              onClick={() => console.log("button")}
            />
            <Button
              label="Style 5"
              type="text"
              fontSize="sm"
              line
              onClick={() => console.log("button")}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
