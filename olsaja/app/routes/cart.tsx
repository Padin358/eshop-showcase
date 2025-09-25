import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Bizon » Košík" },
      { name: "description", content: "Bizon » Košík" },
    ];
  }

export default function Cart () {
    return <div className="">

    </div>
}