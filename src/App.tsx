import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "./components/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));
const BarCharts = lazy(() => import("./pages/Charts/Barcharts"));
const PieCharts = lazy(() => import("./pages/Charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/Charts/LineCharts"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(
  () => import("./pages/management/ProductManagement")
);
const TransactionManagement = lazy(
  () => import("./pages/management/TransactionManagement")
);
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));
const Stopwatch = lazy(() => import("./pages/apps/Stopwatch"));

const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/customers" element={<Customers />} />

            <Route path="/admin/chart/bar" element={<BarCharts />} />
            <Route path="/admin/chart/pie" element={<PieCharts />} />
            <Route path="/admin/chart/line" element={<LineCharts />} />

            <Route path="/admin/product/new" element={<NewProduct />} />
            <Route path="/admin/product/:id" element={<ProductManagement />} />
            <Route
              path="/admin/transaction/:id"
              element={<TransactionManagement />}
            />

            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/toss" element={<Toss />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
