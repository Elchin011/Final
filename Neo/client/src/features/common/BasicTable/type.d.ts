export type BasicTableProps = {
    rows: Array<Record<string, any>>;
    cols: Array<string | any>;
    isLoading?: boolean;
}