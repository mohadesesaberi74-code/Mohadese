import { isAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';
import AdminDashboard from '@/components/admin/AdminDashboard';

export const dynamic = 'force-dynamic';

export default function AdminPage() {
  if (!isAdmin()) redirect('/admin/login');
  return <AdminDashboard />;
}
