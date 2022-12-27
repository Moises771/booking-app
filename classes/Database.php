<?php 

Class Database 

{
    private $host = "localhost";
    private $user = "root";
    private $pass = "";
    private $db = "booking-app";

    private $conn;

    public function __construct()
        {
            
            $this->conn = mysqli_connect($this->host,$this->user,$this->pass,$this->db);
            
            if (!$this->conn) {
                die("error connecting to db");
            }
            echo "db connected";
        }
   
}