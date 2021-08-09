import db from '$lib/dbconnection.js';

export async function get({params}) {
  try {
    const data = await db.any("select id, name from orders");

    return {
      status: 200, 
      body: data
    }
  } catch (err) {
    console.error(err);
  }

  return {
    status: 500
  }
}
