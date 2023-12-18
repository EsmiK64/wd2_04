import React from "react";
import MultiRangeSlider from "./MultiRangeSlider";
import { Checkbox, Label, Select } from "flowbite-react";

const Filters = () => {
    return (<form className="flex flex-col gap-3">
        <span className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            Filtry
        </span>
        <span className="filtry_nadpis">Cena</span>
        <MultiRangeSlider />
        <span className="filtry_nadpis">Řazení</span>
        <div className="flex items-center gap-2">
            <div className="mb-2 block">
                <Label htmlFor="sort" value="Vyber řazení" />
            </div>
            <Select id="sort" required>
                <option>Oblíbenost</option>
                <option>Jméno A - Z</option>
                <option>Jméno Z - A</option>
                <option>Cena od nejnižší</option>
                <option>Cena od nejvyšší</option>
            </Select>
        </div>
        <span className="filtry_nadpis">Dostupnost</span>
        <div className="flex items-center gap-2">
            <Checkbox id="locally" />
            <Label htmlFor="locally" className="flex">
                Dostupné na prodejně
            </Label>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="in-stock" />
            <Label htmlFor="in-stock" className="flex">
                Skladem
            </Label>
        </div>
        <span className="filtry_nadpis">Typ produktu</span>
        <div className="flex items-center gap-2">
            <Checkbox id="skaut" />
            <Label htmlFor="skaut" className="flex">
                Skautské potřeby
            </Label>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="outdoor" />
            <Label htmlFor="outdoor" className="flex">
                Outdoorové vybavení
            </Label>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="stan" />
            <Label htmlFor="stan" className="flex">
                Stanování
            </Label>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="jidlo" />
            <Label htmlFor="jidlo" className="flex">
                Jídlo
            </Label>
        </div>
        <div className="flex items-center gap-2">
            <Checkbox id="batohy" />
            <Label htmlFor="batohy" className="flex">
                Batohy
            </Label>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 mt-5">
            Filtrovat
        </button>
    </form>
    );
}

export default Filters;