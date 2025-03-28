const colors = [
  {
    name: "GRÖN STENSTORP",
    hex: "#0C3B27",
    rgb: "12 59 39",
  },
  {
    name: "VIT STENSTORP",
    hex: "#F6F6F6",
    rgb: "246 246 246",
  },
  {
    name: "BLÅ STENSTORP",
    hex: "#2371C6",
    rgb: "35 113 198",
  },
  {
    name: "GULDKRANS STENSTORP",
    hex: "#E3B25F",
    rgb: "227 178 95",
  },
];
  
  export default function ColorPalette() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-50">
      <div className="flex gap-16 bg-gray-100">
        {colors.map((color) => (
          <div key={color.name} className="flex flex-col justify-center items-center text-center">
            <div
              className="w-24 h-24 rounded-full border-2 relative"
              style={{
                backgroundColor: color.hex,
                borderColor: color.hex,
                boxShadow: `0 0 0 6px #fff, 0 0 0 10px ${color.hex}`,
              }}
            />
            <h3 className="uppercase text-md mt-6 py-2">{color.name}</h3>
            <p className="text-sm">HEX {color.hex.replace("#", "")}</p>
            <p className="text-sm">RGB {color.rgb}</p>
          </div>
        ))}
      </div>
      </div>
    );
  }