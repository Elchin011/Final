import ProductSizeList from "@/features/Admin/Products/Sizes";
import { BasicTable } from "@/features/common/BasicTable";

export default function ProductSizesPage() {
    return (
        <div className="container mx-auto p-4">
            <ProductSizeList />
        </div>
    );
}