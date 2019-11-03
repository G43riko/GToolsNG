import {GVector2} from "../GVector2";

const svgns = "http://www.w3.org/2000/svg";

export class SvgEllipse {
    private readonly elementRef: SVGEllipseElement;

    private position = new GVector2();
    private radius = 10;
    private strokeColor = "black";
    private strokeWidth = "1";
    private fillColor = "transparent";

    public constructor() {
        this.elementRef = document.createElementNS(svgns, "ellipse") as SVGEllipseElement;

        this.elementRef.setAttributeNS(null, "cx", String(this.position.x));
        this.elementRef.setAttributeNS(null, "cy", String(this.position.y));
        this.elementRef.setAttributeNS(null, "r", String(this.radius));
        this.elementRef.setAttributeNS(null, "style", `fill: ${this.fillColor}; stroke: ${this.strokeColor}; stroke-width: ${this.strokeWidth}px;`);
    }
}
