import { collection, addDoc, getDocs } from "firebase/firestore";
import toast from "react-hot-toast";
import { db } from "@/config/firebase"; // Ensure the correct path to your Firebase config

// Function to get all services
export const getAllServices = async () => {
  try {
    const servicesRef = collection(db, "SERVICES");
    const servicesSnapshot = await getDocs(servicesRef);

    // Extract data from the snapshot
    const allServices = servicesSnapshot.docs.map((doc) => ({
      id: doc.id, // Include the document ID if needed
      ...doc.data(), // Spread the document data
    }));

    return allServices;
  } catch (error) {
    console.log("error: " + error);
    toast.error("Error getting all services");
    return []; // Return an empty array or handle the error accordingly
  }
};

// Function to add a new service to Firestore
export const addServiceToFirebase = async (service) => {
  try {
    const newService = await addDoc(collection(db, "CART"), service);

    if (!newService) {
      return false;
    }
    return newService;
  } catch (error) {
    toast.error("Error adding a service");
    return false;
  }
};
