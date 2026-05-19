import { Outlet } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext";
import { base44 } from "@/api/base44Client";

export default function AdminLayout() {
  const { user, isLoadingAuth, isLoadingPublicSettings } = useAuth();

  if (isLoadingAuth || isLoadingPublicSettings) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin" />
      </div>
    );
  }

  // Not logged in → redirect to login
  if (!user) {
    base44.auth.redirectToLogin(window.location.href);
    return null;
  }

  // Logged in but not admin → show access denied
  if (user.role !== "admin") {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-50">
        <div className="text-center px-6">
          <p className="text-4xl mb-4">🔒</p>
          <h1 className="text-2xl font-serif text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-500 font-sans text-sm">This area is restricted to administrators.</p>
        </div>
      </div>
    );
  }

  // Admin — render plain, no navbar/footer
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Outlet />
    </div>
  );
}