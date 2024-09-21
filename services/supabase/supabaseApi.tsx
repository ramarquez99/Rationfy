import { supabase } from "./supabaseClient";

class API {
  static instance = new API();

  logout = async() => {
    let { error } = await supabase.auth.signOut();
  };

  getAccounts = async() => {
    try {
      let { data: accounts, error } = await supabase
        .from("accounts")
        .select("*");
      if (error) {
        throw new Error(`Error al obtener las cuentas: ${error.message}`);
      }

      return accounts;
    } catch (error) {
      console.error(`Error de conexión al obtener las cuentas: ${error}`);
      throw new Error('No se pudieron obtener las cuentas. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  getAccountsByType = async() => {
    try {
      let { data: accounts, error } = await supabase
        .from('accounts')
        .select(`
          account_type_id,
          account_type(
            id
          )
        `)
      if(error) {
        throw new Error(`Error al obtener las cuentas por tipo: ${error.message}`);
      };

      return accounts;
    } catch (error) {
      console.error(`Error de conexión al obtener las cuentas por tipo: ${error}`);
      throw new Error('No se pudieron obtener las cuentas por tipo. Por favor, inténtelo de nuevo más tarde.');
    };
  };

};

export default API;