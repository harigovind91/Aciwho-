import 'package:flutter/material.dart';

void main() => runApp(AciwhoFoundation());

class AciwhoFoundation extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: Colors.orange), // Aciwho Theme
      home: Dashboard(),
    );
  }
}

class Dashboard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Aciwho Welfare Foundation")),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildCampaignCard("Education for All", "Raised: ₹50,000"),
            _buildCampaignCard("Health Mission", "Raised: ₹1,20,000"),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: "Home"),
          BottomNavigationBarItem(icon: Icon(Icons.add_box), label: "Start Campaign"),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: "My Profile"),
        ],
      ),
    );
  }

  Widget _buildCampaignCard(String title, String status) {
    return Card(
      margin: EdgeInsets.all(10),
      child: ListTile(
        title: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
        subtitle: Text(status),
        trailing: ElevatedButton(
          child: Text("Donate Now"),
          onPressed: () { /* Razorpay Logic */ },
        ),
      ),
    );
  }
}
